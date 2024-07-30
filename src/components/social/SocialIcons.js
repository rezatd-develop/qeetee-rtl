
import Image from 'next/image';

import facebook from '../../files/images/icons/facebook_icon.png';
import twitter from '../../files/images/icons/twitter_icon.png';
import instagram from '../../files/images/icons/instagram_icon.png';

export default function SocialIcons() {
    return (
        <>
            <Image className='mx-2 cursor-pointer' width={7} src={facebook} />
            <Image className='mx-2 cursor-pointer' width={12} src={twitter} />
            <Image className='mx-2 cursor-pointer' width={12} src={instagram} />
        </>
    )
}
