import Link from "next/link";
import { Mail, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-20 relative z-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4 bg-emerald-900 text-emerald-400 hover:bg-emerald-900">
          Get In Touch
        </Badge>
        <h2 className="text-3xl font-bold mb-6">
          Let's Build Something Together
        </h2>
        <p className="text-gray-400 mb-8">
          Have a project idea or need a blockchain consultant? I'm always open
          to discussing new opportunities and challenges.
        </p>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50">
              <Mail className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-gray-400 mb-4">
                For project inquiries and collaborations
              </p>
              <Link
                href="mailto:lulox.eth@protonmail.com"
                className="text-emerald-400 hover:text-emerald-300"
              >
                lulox.eth@protonmail.com
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
