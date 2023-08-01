import Image from 'next/image'
const ApplicationLogo = props => (
    <Image
        src="/meta-logo-WHT-260x300.png"
        width="260"
        height="300"
        alt="META Job Search demo site"
        className="mx-auto sm:mx-0 sm:flex-shrink-0"
        {...props}
    />
)

export default ApplicationLogo
