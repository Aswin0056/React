import React from 'react';
import NavBar from './navbar';
import "../styles/homepage.css"
import ImageSlider from './imageslider';
import Footer from './footer';


function HomePage(){
 
    return(
        <div>
            <NavBar />
            <div className='top'>
                <ul className='top-1'>
                    <a href='/page'>Movies</a>
                    <a href='/page'>Stream</a>
                    <a href='/page'>Events</a>
                    <a href='/page'>Plays</a>
                    <a href='/page'>Sports</a>
                    <a href='/page'>Activites</a>
                </ul>
                <ul className='top-2'>
                    <a href='/page'>ListYourShow</a>
                    <a href='/page'>Corporates</a>
                    <a href='/page'>Offers</a>
                    <a href='/page'>Gift Cards</a>
                </ul>
            </div>
            <ImageSlider />
<h1>Recommended Movies</h1>
<div className='seeall'><a href="/page">See All</a></div>
<div className='overall-card'>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    </div>

<div className='banner'>
 
  <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt='banner img' className='banner-img'/>
</div>

<h2 className='h2cd'>The best of live events</h2>
<div className='small-card'>
    <div className="smlcrd">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTAgRXZlbnRz,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" alt='title' className="card-image" />

    </div>
    <div className="smlcrd">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png" alt='title' className="card-image" />

    </div>
    <div className="smlcrd">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" alt='title' className="card-image" />
  
    </div>
    <div className="smlcrd">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTAgRXZlbnRz,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" alt='/' className="card-image" />

    </div>
    <div className="smlcrd">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png" alt='title' className="card-image" />
    </div>
    </div>

<section className='section1'>
  <div className='sedc-sec'>
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png' alt='logo-prem'/>
    <h1>Premiers</h1>
    <p>Brand new releases every friday</p>
    </div>
    <div className='section-card'>
    <div className="sec-card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00429296-yyaaddkyuc-portrait.jpg" alt='title' className="card-image" />
      <div className="sec-card-content">
        <h3 className="sec-card-title">The Lord of the Rings: The War of the Rohirrim (Preview)</h3>
        <p className="sec-card-rating">English</p>
      </div>
    </div>
    <div className="sec-card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00424768-zpfyqwpqlu-portrait.jpg" alt='title' className="card-image" />
      <div className="sec-card-content">
        <h3 className="sec-card-title">Butcher`s Crossing</h3>
        <p className="sec-card-rating">English</p>
      </div>
    </div>
    <div className="sec-card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00409188-jyazlupqgh-portrait.jpg" alt='title' className="card-image" />
      <div className="sec-card-content">
        <h3 className="sec-card-title">he Lord of the Rings: The War of the Rohirrim (Preview)</h3>
        <p className="sec-card-rating">English</p>
      </div>
    </div>
    <div className="sec-card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00429961-ydlahxczuj-portrait.jpg" alt='/' className="card-image" />
      <div className="sec-card-content">
        <h3 className="sec-card-title">Venom 3-Movie Collection</h3>
        <p className="sec-card-rating">English</p>
      </div>
    </div>
    <div className="sec-card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00411699-fxrfzeapvz-portrait.jpg" alt='title' className="card-image" />
      <div className="sec-card-content">
        <h3 className="sec-card-title">Jurassic Park Trilogy</h3>
        <p className="sec-card-rating">English</p>
      </div>
    </div>
    </div>
    </section>
    {/*  */}
    <div className='overall-card'>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    </div>
    {/*  */}
    <div className='overall-card'>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    </div>
    {/*  */}
    <div className='overall-card'>
 
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
 
    </div>
    {/*  */}
    <div className='overall-card'>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    </div>
    {/*  */}
    <div className='overall-card'>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzM1LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410722-vsjnaujmay-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Viduthalai 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAxLjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">UI</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTQ4LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-cntvhkufct-portrait.jpg" alt='/' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Mufasa</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422899-avwncfzfpu-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Rifle club</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    <div className="card">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzMDEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-kwvhdayfyn-portrait.jpg" alt='title' className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Pushpa 2</h3>
        <p className="card-rating">Action/Thriller</p>
      </div>
    </div>
    </div>
{/*  */}
<section>
  <div className='small-cards'>
    

  </div>
</section>


    <Footer />
        </div>
    );
}

export default HomePage;