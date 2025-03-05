import type React from "react"
import Link from "next/link"
import Image from "next/image"
import image from '../assets/image.png'
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'
import { StaticImageData } from "next/image"

import { ArrowRight, BarChart3, CheckCircle, Layers, ShieldCheck, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BizMan</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Streamline Your Retail Business with <span className="text-primary">BizMan</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground">
              The all-in-one retail management solution that helps you manage inventory, track sales, and grow your
              business with powerful analytics.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="mt-16 rounded-lg border bg-background shadow-xl">
              <Image
                src={image}
                alt="BizMan Dashboard Preview"
                width={1200}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Powerful Features for Modern Retailers</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your retail business efficiently in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShoppingCart className="h-10 w-10" />}
                title="Inventory Management"
                description="Track stock levels, set reorder points, and manage suppliers with ease."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10" />}
                title="Sales Analytics"
                description="Get real-time insights into your sales performance with detailed reports."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Customer Management"
                description="Build stronger relationships with your customers through detailed profiles."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10" />}
                title="Multi-store Support"
                description="Manage multiple locations from a single dashboard with location-specific reporting."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10" />}
                title="Secure Transactions"
                description="Process payments securely with built-in fraud detection and prevention."
              />
              <FeatureCard
                icon={<CheckCircle className="h-10 w-10" />}
                title="Automated Tasks"
                description="Save time with automated inventory updates, reordering, and reporting."
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="$49"
                description="Perfect for small businesses just getting started."
                features={[
                  "Up to 1,000 products",
                  "Basic reporting",
                  "1 user account",
                  "Email support",
                  "Mobile app access",
                ]}
                buttonText="Start Free Trial"
              />
              <PricingCard
                title="Professional"
                price="$99"
                description="Ideal for growing businesses with multiple employees."
                features={[
                  "Up to 10,000 products",
                  "Advanced analytics",
                  "5 user accounts",
                  "Priority support",
                  "API access",
                  "Custom reports",
                ]}
                buttonText="Start Free Trial"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="$199"
                description="For large retailers with complex requirements."
                features={[
                  "Unlimited products",
                  "Custom dashboards",
                  "Unlimited users",
                  "24/7 dedicated support",
                  "Advanced security features",
                  "Multi-location support",
                  "Custom integrations",
                ]}
                buttonText="Contact Sales"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Trusted by Retailers Worldwide</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                See what our customers have to say about BizMan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="BizMan has transformed how we manage our inventory. We've reduced stockouts by 75% and increased sales by 30%."
                author="Sarah Johnson"
                company="Urban Outfitters"
                image={Image1}
              />
              <TestimonialCard
                quote="The analytics features alone are worth the investment. We can now make data-driven decisions that have boosted our profit margins."
                author="Michael Chen"
                company="Tech Haven"
                image={Image2}
              />
              <TestimonialCard
                quote="Managing multiple store locations used to be a nightmare. With BizMan, it's now seamless and efficient."
                author="Emma Rodriguez"
                company="Fashion Forward"
                image={Image3}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Retail Business?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of retailers who have streamlined their operations with BizMan.
              </p>
              <div className="mt-10">
                <Link href="/signup">
                  <Button size="lg" className="gap-2">
                    Start Your Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">BizMan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BizMan Technologies, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-background p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-lg border ${highlighted ? "border-primary shadow-lg ring-1 ring-primary" : "shadow-sm"} p-8 relative`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="ml-1 text-muted-foreground">/month</span>
      </div>
      <p className="mt-4 text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  company,
  image,
}: {
  quote: string
  author: string
  company: string
  image: string | StaticImageData
}) {
  return (
    <div className="bg-background p-6 rounded-lg border shadow-sm">
      <p className="text-muted-foreground italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <Image src={image || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  )
}

