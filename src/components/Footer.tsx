import React from 'react'
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='flex justify-between ml-10 mr-10'>
    <div>
        <AcUnitIcon />
        UniPost

    </div>
    <div>
    <div className="text-purple-500 font-semibold">Company</div>
    <div>Donec dignissim</div>
    <div>Curabitur egestas</div>
    <div>Nam posure</div>
    <div>Aneeam</div>
    </div>
    <div>
    <div className="text-purple-500 font-semibold">Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    </div>
    <div>
    <div className="text-purple-500 font-semibold">Resources</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    </div>
    <div className='flex m-3'>
    <div><FacebookIcon/></div>
    <div><LinkedInIcon/></div>
    <div><TwitterIcon/></div>
    <div><InstagramIcon/></div>
    </div>
    </div>
    
  )
}

export default Footer