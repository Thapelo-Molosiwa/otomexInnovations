import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Code, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 mix-blend-multiply" />
        <div 
          className="relative min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')"
          }}
        >
          <div className="container flex min-h-[600px] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Affordable Tech Solutions for local and global Businesses 
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-lg text-white md:text-xl">
              We create websites, offer website maintenance, and provide tools to help you grow and succeed in a digital world.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Start Your Journey Today!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Monitor className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Website Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom websites for local businesses with responsive design and e-commerce integration.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/services#websites">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintaining your website to keep up with todays tech.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/services#training">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Megaphone className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Digital Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SEO optimization and social media branding to reach the right audience.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/services#digital">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}