import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import createMiddleware from "next-intl/middleware";
import { routing } from "./shared/constants/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclure explicitement la page login de toute vérification
  const isLoginPage = pathname.includes("/admin/login");
  
  // Route admin protégée (sans la page login)
  const isAdminRoute = pathname.includes("/admin") && !isLoginPage;

  if (isAdminRoute) {
    const response = NextResponse.next();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return request.cookies.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      // Pas de session → rediriger vers login (une seule fois)
      const loginUrl = new URL(`/${pathname.split("/")[1]}/admin/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }

    return response;
  }

  // Pour toutes les autres routes (y compris /admin/login) → gestion i18n normale
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|.*\\..*).*)",
    "/(fr|en)/:path*",
  ],
};
