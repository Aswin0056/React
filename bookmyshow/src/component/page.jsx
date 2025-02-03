import React from 'react';
import NavBar from './navbar';
import "../styles/homepage.css"
import ImageSlider from './imageslider';
import Footer from './footer';



function Page(){
 
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

            <Footer />

        </div>
    );
}

export default Page;