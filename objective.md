commerce-frontend/
│── app/                           # App Router (Next.js 14+)
│   ├── layout.tsx                  # Root layout (fonts, metadata, navbar)
│   ├── page.tsx                    # Landing page
│   ├── login/                      # Auth pages
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── products/                   # Product listing & details
│   │   ├── page.tsx                # Product catalog
│   │   └── [id]/page.tsx           # Product detail page
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── orders/
│       └── page.tsx
│
│── components/                     # Reusable UI components
│   ├── ui/                         # Buttons, Inputs, Modals (design system)
│   ├── layout/                     # Navbar, Footer, Sidebar
│   └── commerce/                   # ProductCard, CartItem, etc.
│
│── hooks/                          # Custom hooks (useAuth, useCart, etc.)
│── lib/                            # API clients, utils
│   ├── api.ts                      # fetcher for backend APIs
│   ├── auth.ts                     # login, signup helpers
│   └── storage.ts                  # localStorage/session helpers
│
│── context/                        # React Context (AuthProvider, CartProvider)
│
│── styles/
│   └── globals.css
│
│── public/                         # static assets (logo, icons, images)
│
│── .env.local                      # API URLs, secrets
│── tailwind.config.ts
│── tsconfig.json


app/ → Pages grouped by feature (Next.js 14 App Router).

components/ → Decoupled, reusable UI.

lib/ → API utilities (connect frontend to your Go backend).

context/ → Global state (Auth, Cart).

hooks/ → Encapsulate logic like fetching, form handling.

public/ → Brand assets, images, etc.

