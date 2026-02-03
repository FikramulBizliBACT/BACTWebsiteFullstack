import React from 'react';
import Image from 'next/image';
import FlowingMenu from '../ui/FlowingMenu'
export default function OurCompany() {
    
const demoItems = [
  { link: '#', text: 'Asia Pasific', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Europe, Middle East & Africa', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Americas', image: 'https://picsum.photos/600/400?random=4' }
];

  return (
  <section>
   
        <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
  textColor="#ffffff"
  bgColor="#060010"
  marqueeBgColor="#ffffff"
  marqueeTextColor="#060010"
  borderColor="#ffffff"
/>
 </div>   
    </section>
  );
}
