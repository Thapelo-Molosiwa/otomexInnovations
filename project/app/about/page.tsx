import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="container py-16">
      {/* Mission Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About OTOMEX Innovations</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-lg text-muted-foreground">
          We empower local and global businesses by offering affordable, scalable tech solutions that simplify operations and enhance digital presence.
        </p>
      </section>

      {/* Values Section */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader className="text-center">
            <Rocket className="mx-auto h-12 w-12 text-primary" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Staying ahead with cutting-edge technology solutions that drive growth.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <Users className="mx-auto h-12 w-12 text-primary" />
            <CardTitle>Community</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Building strong relationships with local businesses and schools.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <Target className="mx-auto h-12 w-12 text-primary" />
            <CardTitle>Excellence</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Delivering high-quality solutions that exceed expectations.
          </CardContent>
        </Card>
      </section>

      {/* Founder Section */}
      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold">Meet Our Founders</h2>
        <div className="mt-8 flex flex-col items-center">
        
          <h3 className="mt-4 text-2xl font-semibold">Tshepiso Foko, Mpho Makgwe, Okuhle Badli, Onkgopotse Mogari and Thapelo Molosiwa </h3>
          
          <p className="mx-auto mt-4 max-w-[600px] text-center text-muted-foreground">
            With a passion for coding and technology, We founded OTOMEX Innovations to bridge the digital divide and make technology accessible to local and global businesses. His vision is to create a more connected and digitally empowered community.
          </p>
        </div>
      </section>
    </div>
  );
}