import React from 'react'
import './card.css'

function Card() {
    const channelArray = [
        {
          id: 1,
          title: "React.js Full Course in Hindi for Beginners - 2023 | Master React in 12 Hours",
          thumbnail_Url: "https://i.ytimg.com/vi/lLeZ8Cr2YVM/hqdefault.jpg?s…AYgATgBQAE=&rs=AOn4CLBY_D3ENzr-6SPmu8KEO9lv7wEM2Q",
          likes: 15000, 
          views: 382095, 
          channel_Name: "web3Mantra",
          channe_lLogoUrl: "https://yt3.googleusercontent.com/S9h4eO-bocWkHGUHKyQPK5uacs2NrWWfiQ9LusOCoMj0mpv90YZM6nwr_HVzA1mmJK3TWazj=s176-c-k-c0x00ffffff-no-rj",
        },
        {
            id: 2,
            title: "Data Structures in Javascript ( Bubble, Selection & Insertion Sort ) | Frontend DSA Interview Ques",
            thumbnail_Url: "https://i.ytimg.com/vi/neKqXUyIq2M/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLC9gasFnBYRw86HhI0J28eJDWuiow",
            likes: 150, 
            views: 3095, 
            channel_Name: "RoadsideCoder",
            channe_lLogoUrl: "https://yt3.ggpht.com/G42b4i9auAhu-cy3wi9IhLxmkfl2i_iokiVgHx32xsZ8I4ok6uzamWXUj16xzJmAGoq8fRfS1Q=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 3,
            title: "How I started coding from 0 and cracked Google | Best Free Resources for Coding | for bigners",
            thumbnail_Url: "	https://i.ytimg.com/vi/NxvS-Uzjueg/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLATlJ57lQaVgTWg3QLt79XU5qfg6A",
            likes: 2000, 
            views: 6000, 
            channel_Name: "Fraz",
            channe_lLogoUrl: "https://yt3.ggpht.com/FitboDHvZPrXqXtbe1JjfeN9x_wgNxv58GDadFqIf5nu1peeADWpWdW82Sb7eBaFH-TNy9AqgbM=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 4,
            title: "10 Challenges, 90 Days SUCCESS BLUEPRINT for 2024! | Life Advice 2023 | Ankur Warikoo Hindi",
            thumbnail_Url: "	https://i.ytimg.com/vi/6azp2ClkdCk/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLBxVDDKE0Lil6fylY1Mqk_NXRDV6Q",
            likes: 1600, 
            views: 120000, 
            channel_Name: "warikoo",
            channe_lLogoUrl: "https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 5,
            title: "This resume got me offers from Google, Microsoft, and Amazon!",
            thumbnail_Url: "https://i.ytimg.com/vi/kCgn-7NBPSs/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLAVYSBkxFp_-cNure9yZvA4DW9JJA",
            likes: 35000, 
            views: 900000, 
            channel_Name: "PIRATE KING",
            channe_lLogoUrl: "https://yt3.ggpht.com/wtylmZTnHHDOcD32yZh-46C1RsyqQA0BHs56v6CiNBAvf-BackU7cLGHwSOTzKADpjptr_40aQ=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 6,
            title: "How to Focus to Change Your Brain | Huberman Lab Podcast #6",
            thumbnail_Url: "	https://i.ytimg.com/vi/LG53Vxum0as/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLC25Nc4O14JfgMZf3JP0q5tEmOoNA",
            likes: 10000, 
            views: 66295, 
            channel_Name: "Andrew Huberman",
            channe_lLogoUrl: "https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s48-c-k-c0x00ffffff-no-rj",
          },
             {
          id: 7,
          title: "DO THIS To Never Be LAZY AGAIN! (Master Self-Discipline)| Jay Shetty",
          thumbnail_Url: "https://i.ytimg.com/vi/sxPqNpt6SRw/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLCsKgjh7RCRSOgk7uOvir1aYmhr6w",
          likes: 19000, 
          views: 7782095, 
          channel_Name: "Jay Shetty",
          channe_lLogoUrl: "https://yt3.ggpht.com/98zbRkvQV0L3QJQmnKWIiLObrGH5EAgVACw9J73I7Q2J-iyc1W7jxDLP7gMYUZnddwlfr4vQ=s48-c-k-c0x00ffffff-no-rj",
        },
        {
            id:8,
            title: "Relaxing SOLO Camping with Rain Forest Mountain views [ gloomy weather, cosy shelter, rain ASMR ]",
            thumbnail_Url: "https://i.ytimg.com/vi/y0wXQ5EdW_0/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLCNJ7vTvD2WwxfQawZ7EI9K4XxImA",
            likes: 99000, 
            views: 1002095, 
            channel_Name: "G0 4X4",
            channe_lLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYDo4xBbDDxtqT8HaZ0-YIrD_-2bcTjJPM48TzoFg=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 9,
            title: "ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles)",
            thumbnail_Url: "https://i.ytimg.com/vi/fBnAMUkNM2k/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLDm1RCCtzkd2xmcxI6qBOnZTd7nCA",
            likes: 11000, 
            views: 227895, 
            channel_Name: "English..",
            channe_lLogoUrl: "https://yt3.ggpht.com/3ErdBd0bg2Qw5rKdqDK-7vPAf0tirRuodlGGZuhZePQcjEu8i5KniCN-EUCBtQkSOy14M26O=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 10,
            title: "How much Coding to learn for Placements? Data Structure & Algorithms",
            thumbnail_Url: "https://i.ytimg.com/vi/AgyTHzjBS-c/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLBhuR9b74k0wS5qnIMhtu3wu7d4gQ",
            likes: 29000, 
            views: 1282095, 
            channel_Name: "Apna Collage",
            channe_lLogoUrl: "https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 11,
            title: "I asked President Obama if he's DEPRESSED!? OBAMA",
            thumbnail_Url: "https://i.ytimg.com/vi/jAYVKZSWXhY/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLBx6bwc-zuie0D5FESBU3uKjeN54g",
            likes: 19000, 
            views: 7782095, 
            channel_Name: "Hassan Ma...",
            channe_lLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKY5S9vGreZ7DqibqhaSCgfwoh4_roTx2wQRdagDnw=s48-c-k-c0x00ffffff-no-rj",
          },
          {
            id: 12,
            title: "INSANE WORK ETHIC - Kobe Bryant Motivational Video!...",
            thumbnail_Url: "https://i.ytimg.com/vi/GhNhWsv3NlY/hq720.jpg?sqp=-…AYgATgBQAE=&rs=AOn4CLBUmHVeN3mGVQTbsW1lvDcPkwm4Hw",
            likes: 22000, 
            views: 222095, 
            channel_Name: "Alpha Leaders",
            channe_lLogoUrl: "https://yt3.ggpht.com/XOwvyCNkgNCEHiPqFynXYOZydc_r7vWsY1udsCyI2J1jrl7tUGSU_TerOszggNGAjKgC583CbA=s48-c-k-c0x00ffffff-no-rj",
          },
      ];
      
      console.log(channelArray)
  return (
    <div className='parant-div' >
    
    {channelArray.map((channel) => (
      <div id='card' key={channel.id}>
        <img className='thmbnl' src={channel.thumbnail_Url} alt="" />
        <div id="title-img">
          <img className='logo-img' src={channel.channe_lLogoUrl} alt="" />
          <p className='title'>{channel.title}</p>
        </div>
        <p style={{ marginTop: "0", paddingTop: "0", marginLeft: "50px", fontSize: "20px", marginBottom: "0px" }}>{channel.channel_Name}</p>
        <p className='views'>Views: {channel.views} Likes: {channel.likes}</p>
      </div>
    ))}
  </div>
  )
}

export default Card
