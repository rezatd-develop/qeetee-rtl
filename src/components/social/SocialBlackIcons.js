import clsx from 'clsx';

import Image from 'next/image';

import twitterBlack from '../../files/images/icons/twitter-black.png';
import facebookBlack from '../../files/images/icons/facebook-black.png';
import whatsappBlack from '../../files/images/icons/whatsapp-icon-black.png';
import messengerBlack from '../../files/images/icons/messenger-black.png';

export default function SocialBlackIcons({ containerClassName }) {
    return (
        <div className={clsx('d-flex', containerClassName)}>
            <Image className='m-1' width={30} src={twitterBlack} />
            <Image className='m-1' width={30} src={facebookBlack} />
            <Image className='m-1' width={30} src={whatsappBlack} />
            <Image className='m-1' width={30} src={messengerBlack} />
        </div>
    )
}
