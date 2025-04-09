

import ChangedNavbar from "@/components/ChangedNavbar"
import ContactDetails from "@/components/ContactDetails"
import ContactForm from "@/components/ContactForm"
import Container from "@/components/container"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageIntro from "@/components/page-intro"

export default function ContactPage() {
  return (
    <div className="relative">      <div className="fixed top-0 left-0 w-full z-30">
    <Navbar />
  </div>
      <PageIntro eyebrow="Contact us" title="Let's work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40 lg:mb:20 pb:16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </div>
  )
}
