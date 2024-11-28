import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Monitor, Code, Megaphone, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="container py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-lg text-muted-foreground">
          Comprehensive tech solutions tailored for small businesses and schools
        </p>
      </section>

      <section className="mt-16" id="websites">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0">
                <Monitor className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-2xl">Website Creation</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <p className="text-muted-foreground">Custom websites that help your business stand out online.</p>
                <ul className="mt-4 space-y-2">
                  {["Responsive Design", "E-commerce Integration", "SEO Optimization", "Custom Branding"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </div>
            <div 
              className="h-[300px] bg-cover bg-center md:h-auto" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')" }}
            />
          </div>
        </Card>
      </section>

      <section className="mt-16" id="maintenance">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="h-[300px] bg-cover bg-center md:h-auto" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')" }}
            />
            <div className="p-6 md:p-8">
              <CardHeader className="p-0">
                <Code className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-2xl">Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <p className="text-muted-foreground">Keep your website secure, up-to-date, and performing at its best.</p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Regular Updates & Security Patches",
                    "Performance Optimization",
                    "Content Updates",
                    "Technical Support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/contact">Get Maintenance Plan</Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-16" id="digital">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0">
                <Megaphone className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-2xl">Digital Presence</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 p-0">
                <p className="text-muted-foreground">Boost your online visibility and reach your target audience.</p>
                <ul className="mt-4 space-y-2">
                  {["Social Media Strategy", "Content Marketing", "SEO Services", "Analytics & Reporting"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/contact">Boost Presence</Link>
                </Button>
              </CardContent>
            </div>
            <div 
              className="h-[300px] bg-cover bg-center md:h-auto" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80')" }}
            />
          </div>
        </Card>
      </section>
    </div>
  );
}