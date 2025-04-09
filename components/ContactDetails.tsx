import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export default function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Our offices</h2>
      <p className="text-gray-600 mb-8">
        Prefer doing things in person? We don't but we have to list our addresses here for trustability.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="font-bold">VNIT Nagpur</h3>
          <p className="text-gray-600">
            Visvesvaraya National Institute of Technology Nagpur
            <br />
            Maharashtra, Pin 440010 (India)
          </p>
        </div>

        <div>
          <h3 className="font-bold">Delhi</h3>
          <p className="text-gray-600">
            Neelam Chowk Ajronda Metro Station
            <br />
            Faridabad, Haryana, Pin 121007 (India)
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8"></div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Email us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Lead Frontend Engineer</h3>
              <a href="mailto:signalinternet@outlook.com" className="text-[#00E0FF] hover:underline">
                signalinternet@outlook.com
              </a>
            </div>
            <div>
              <h3 className="font-bold">Lead Backend Engineer</h3>
              <a href="mailto:satishbanchhere1@gmail.com" className="text-[#00E0FF] hover:underline">
                satishbanchhere1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8"></div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Follow us</h2>
          <div className="flex gap-6">
            <a href="#" className="text-black hover:text-[#00E0FF]">
              <GithubIcon size={24} />
            </a>
            <a href="#" className="text-black hover:text-[#00E0FF]">
              <LinkedinIcon size={24} />
            </a>
            <a href="#" className="text-black hover:text-[#00E0FF]">
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
