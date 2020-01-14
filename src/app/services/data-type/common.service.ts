export interface  Banner {
   targetId: number;
   url: string;
   imageUrl: number;
}
export interface  HotTag {
   id: number;
   name: string;
   position: number;
}

// 歌手
export interface  Singer {
   id: number;
   name: string;
   picUrl: number;
   albumSize: number;
}
// 歌曲
export interface  Song {
   id: number;
   name: string;
   url: number;
   ar: Singer[];
   al: { id: number; name: string; picUrl: string };
   dt: number;
}

// 播放地址

export interface  SongUrl {
   id: number;
   url: string;
}


// 歌单
export interface  SongSheet {
   id: number;
   name: string;
   picUrl: number;
   playCount: number;
   tracks: Song[];
}
