import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <p className="mt-4 text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Página não encontrada
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-primary px-6 py-3 text-xs tracking-[0.3em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Algo não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente em instantes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-primary px-6 py-3 text-xs tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mostra Essenza 2026 — Jeito de Viver" },
      {
        name: "description",
        content:
          "Mostra Essenza 2026: arquitetos renomados transformam ambientes em obras de arte habitáveis. Uma experiência sensorial de arquitetura, design e decoração no Rio Grande do Sul.",
      },
      { name: "author", content: "Essenza Casa e Jardim" },
      { property: "og:title", content: "Mostra Essenza 2026 — Jeito de Viver" },
      {
        property: "og:description",
        content:
          "Mais do que uma mostra. Uma experiência sensorial de arquitetura e design assinada pelos maiores nomes do sul do Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mostra Essenza 2026 — Jeito de Viver" },
      { name: "description", content: "Mostra Essenza - Poa e Pelotas" },
      { property: "og:description", content: "Mostra Essenza - Poa e Pelotas" },
      { name: "twitter:description", content: "Mostra Essenza - Poa e Pelotas" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3136dadf-858a-4bee-80fb-87eacb5769ae/id-preview-a718a6fa--38ec8ce6-6632-4ca1-b7c6-5be90eed265c.lovable.app-1781647080730.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3136dadf-858a-4bee-80fb-87eacb5769ae/id-preview-a718a6fa--38ec8ce6-6632-4ca1-b7c6-5be90eed265c.lovable.app-1781647080730.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
