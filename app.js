const music = new Audio("music/3.mp3");
// music.play();

const songs = [
  {
    id: 1,
    songName: `
        Tere Vaaste (From "Zara Hatke Zara Bachke") <br>
        <div class="subtitle">
        Varun Jain, Sachin-Jigar, Shadab Faridi, Altamash Faridi, Amitabhr</div>`,
    poster: "image/1.jpg",
  },
  {
    id: 2,
    songName: `Phir Aur Kya Chahiye (From "Zara Hatke Zara Bachke")<br>
        <div class="subtitle">
        Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya</div>`,
    poster: "image/2.jpg",
  },
  {
    id: 3,
    songName: ` Zihaal e Miskin<br>
        <div class="subtitle">Javed-mohsin, Vishal Mishra, Shreya Ghoshal</div>`,
    poster: "image/3.jpg",
  },
  {
    id: 4,
    songName: ` Ram Siya Ram (From "Adipurush")<br>
        <div class="subtitle">Sachet-Parampara - Ram Siya Ram (From "Adipur</div>`,
    poster: "image/4.jpg",
  },
  {
    id: 5,
    songName: ` Obsessed<br>
        <div class="subtitle">Riar Saab, Abhijay Sharma - Obsessed</div>`,
    poster: "image/5.jpg",
  },
  {
    id: 6,
    songName: ` 
    Apna Bana Le<br>
        <div class="subtitle">Arijit Singh</div>`,
    poster: "image/6.jpg",
  },
  {
    id: 7,
    songName: `Jai Shri Ram (From "Adipurush")<br>
        <div class="subtitle">Ajay-Atul - Jai Shri Ram (From "Adipur</div>`,
    poster: "image/7.jpg",
  },
  {
    id: 8,
    songName: ` Maan Meri Jaan<br>
        <div class="subtitle">King - Champagne Talk
        </div>`,
    poster: "image/8.jpg",
  },
  {
    id: 9,
    songName: `Deva Deva (From "Brahmastra")<br>
        <div class="subtitle">Pritam Chakraborty, Arijit Singh, Amitab</div>`,
    poster: "image/9.jpg",
  },
  {
    id: 10,
    songName: ` Raataan Lambiyan (From "Shershaah")<br>
        <div class="subtitle">Asees Kaur, Tanishk Bagchi, Jubin Nau</div>`,
    poster: "image/10.jpg",
  },
  {
    id: 11,
    songName: ` Kahani Suno 2.0<br>
        <div class="subtitle">Kaifi Khalil</div>`,
    poster: "image/11.jpg",
  },
  {
    id: 12,
    songName: ` Shayad<br>
        <div class="subtitle">Pritam, Arijit Singh</div>`,
    poster: "image/12.jpg",
  },
  {
    id: 13,
    songName: ` Jaadui <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "image/13.jpg",
  },
  {
    id: 14,
    songName: ` Hawayein <br>
        <div class="subtitle">Pritam, Arijit Singh</div>`,
    poster: "image/14.jpg",
  },
  {
    id: 15,
    songName: ` Ranjha <br>
        <div class="subtitle">Jasleen Royal, B Praak</div>`,
    poster: "image/15.jpg",
  },
  {
    id: 16,
    songName: ` Sanak <br>
        <div class="subtitle">Badshah</div>`,
    poster: "image/16.jpg",
  },
  {
    id: 17,
    songName: ` Agar Tum Saath Ho <br>
        <div class="subtitle"> Alka Yagnik, Arijit Singh</div>`,
    poster: "image/17.jpg",
  },
  {
    id: 18,
    songName: ` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "image/18.jpg",
  },
  {
    id: 19,
    songName: ` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "image/19.jpg",
  },
];

//Search data is start from here
let search_result = document.getElementsByClassName("search_result")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;
  // console.log(poster);
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;

  card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
  search_result.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");
  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      search_result.style.display = "none";
    } else {
      search_result.style.display = "";
    }
  }
});

//Search data is End here

// Music Controll is Here

Array.from(document.getElementsByClassName("songItems")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((e1) => {
    // e1.style.background='rgb(105, 105, 105, .0)'
    e1.classList.add("bi-play-circle-fill");
    e1.classList.remove("bi-pause-circle-fill");
  });
};
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItems")).forEach((e1) => {
    e1.style.background = "rgb(105, 105, 105, .0)";
  });
};

// Download Button work is Here
// poster MasterPlay work is here
// Title work is here

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");
// console.log(index);

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (e1) => {
    index = e1.target.id;
    // console.log(index);
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    // download_music.href=`music/${index}.mp3`    Playing new tab
    download_music.href = `music/${index}.mp3`;

    let songTitles = songs.filter((element) => {
      return element.id == index;
    });

    songTitles.forEach((els) => {
      let { songName } = els;
      // let{songName,poster}=els;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
      // poster_master_play.src=poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItems"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    e1.target.classList.add("bi-pause-circle-fill");
    e1.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
  });
});

// Timing arrangement IS here

let currentStart = document.getElementById("current_start");
let currentEnd = document.getElementById("currentend");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let curr_time = music.currentTime;
  let time_dur = music.duration;

  let min_E = Math.floor(time_dur / 60);
  let sec_E = Math.floor(time_dur % 60);
  // console.log(sec1);

  if (sec_E < 10) {
    sec_E = `0${sec_E}`;
  }
  currentEnd.innerText = `${min_E}:${sec_E}`;

  let min_S = Math.floor(curr_time / 60);
  let sec_S = Math.floor(curr_time % 60);
  if (sec_S < 10) {
    sec_S = `0${sec_S}`;
  }
  currentStart.innerText = `${min_S}:${sec_S}`;

  let progressBar = parseInt((curr_time / time_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

// Volume Button work is Here

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  }

  let vol_a = vol.value;
  // console.log(vol_ctrl);
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

// Next and Back button Work

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItems")).length;
  }

  music.src = `music/${index}.mp3`;
  poster_master_play.src = `image/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((element) => {
    return element.id == index;
  });

  songTitles.forEach((els) => {
    let { songName } = els;
    // let{songName,poster}=els;
    title.innerHTML = songName;
    // poster_master_play.src=poster;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItems"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllplays();
  e1.target.classList.add("bi-pause-circle-fill");
  e1.target.classList.remove("bi-play-circle-fill");
  wave.classList.add("active1");
});
next.addEventListener("click", () => {
  index += 1;
  if (index > Array.from(document.getElementsByClassName("songItems")).length) {
    // index=Array.from(document.getElementsByClassName('songItems')).length;
    index = 1;
  }

  music.src = `music/${index}.mp3`;
  poster_master_play.src = `image/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((element) => {
    return element.id == index;
  });

  songTitles.forEach((els) => {
    let { songName } = els;
    // let{songName,poster}=els;
    title.innerHTML = songName;
    // poster_master_play.src=poster;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItems"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllplays();
  e1.target.classList.add("bi-pause-circle-fill");
  e1.target.classList.remove("bi-play-circle-fill");
  wave.classList.add("active1");
});

// Popular Songs and Artist scroller is here

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementById("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artists_bx = document.getElementById("Artists_bx")[0];

pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});
pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});

// Shuffle button work is here

// let shuffle = document.getElementsByClassName('shuffle')[0];
// shuffle.addEventListener('click',()=>{
//     let a = shuffle.innerHtml;
//     console.log(a)

//     switch (a) {
//         case "next":
//             shuffle.classList.add('bi-arrow-repeat');
//             shuffle.classList.remove('bi-music-note-beamed');
//             shuffle.classList.remove('bi-shuffle');
//             shuffle.innerHTML='repeat';
//             break;

//         case "repeat":
//             shuffle.classList.remove('bi-arrow-repeat');
//             shuffle.classList.remove('bi-music-note-beamed');
//             // shuffle.classList.add('bi-shuffle');
//             shuffle.classList.add('bi-play-circle-fill');
//             shuffle.innerHTML='random';
//             break;

//         case "random":
//             shuffle.classList.remove('bi-arrow-repeat');
//             shuffle.classList.add('bi-music-note-beamed');
//             shuffle.classList.remove('bi-shuffle');
//             shuffle.innerHTML='next';
//             break;
//         }
// });

// const next_music=()=>{
//     if(index==songs.length){
//         index=1;
//     }else{
//         index++;
//     }
//     music.src=`music/${index}.mp3`;
//     poster_master_play.src=`image/${index}.jpg`;
//     music.play();
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');

//     // download_music.href=`music/${index}.mp3`    Playing new tab
//     download_music.href=`music/${index}.mp3`;

//     let songTitles=songs.filter((element)=>{
//         return element.id==index;
//     })

//     songTitles.forEach(els=>{
//         let{songName}=els;
//         // let{songName,poster}=els;
//         title.innerHTML=songName;
//         download_music.setAttribute('download',songName);
//         // poster_master_play.src=poster;
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
//     makeAllplays();
//     e1.target.classList.add('bi-pause-circle-fill');
//     e1.target.classList.remove('bi-play-circle-fill');
//     wave.classList.add('active1');

// }
// const repeat_music=()=>{
//     index;
//     music.src=`music/Random/${index}.mp3`;
//     poster_master_play.src=`image/Random/${index}.jpg`;
//     music.play();
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');

//     // download_music.href=`music/${index}.mp3`    Playing new tab
//     download_music.href=`music/Random/${index}.mp3`;

//     let songTitles=songs.filter((element)=>{
//         return element.id==index;
//     })

//     songTitles.forEach(els=>{
//         let{songName}=els;
//         // let{songName,poster}=els;
//         title.innerHTML=songName;
//         download_music.setAttribute('download',songName);
//         // poster_master_play.src=poster;
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
//     makeAllplays();
//     e1.target.classList.add('bi-pause-circle-fill');
//     e1.target.classList.remove('bi-play-circle-fill');
//     wave.classList.add('active1');

// }
// const random_music=()=>{
//     if(index==songs.length){
//         index=1;
//     }else{
//         index=Math.floor((Math.random()*songs.length)+1);
//     }
//     music.src=`music/${index}.mp3`;
//     poster_master_play.src=`image/Random/${index}.jpg`;
//     music.play();
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');

//     // download_music.href=`music/${index}.mp3`    Playing new tab
//     download_music.href=`music/Random/${index}.mp3`;

//     let songTitles=songs.filter((element)=>{
//         return element.id==index;
//     })

//     songTitles.forEach(els=>{
//         let{songName}=els;
//         // let{songName,poster}=els;
//         title.innerHTML=songName;
//         download_music.setAttribute('download',songName);
//         // poster_master_play.src=poster;
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
//     makeAllplays();
//     e1.target.classList.add('bi-pause-circle-fill');
//     e1.target.classList.remove('bi-play-circle-fill');
//     wave.classList.add('active1');

// }

// music.addEventListener('ended',()=>
// {
//     // index++;
//     let b=suffle.innerHTML;

//     switch(b){
//         case 'repeat':
//             repeat_music();
//             break;
//         case 'next':
//             next_music();
//             break;
//         case 'random':
//             random_music();
//             break;
//     }

// });
