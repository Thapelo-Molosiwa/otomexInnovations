import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-lg text-muted-foreground">
          Get in touch with us to discuss your project or ask any questions
        </p>
      </section>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Card className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Send us a Message</h2>
          <ContactForm />
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="mt-1 text-muted-foreground">
                  <br />
                  Rustenburg, 0300<br />
                  South Africa
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-muted-foreground">+27 728921928</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-muted-foreground">info@otomexinnovations.com</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}