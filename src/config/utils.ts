export interface Meme {
  id: number;
  name: string;
  memeUrl: string;
  imageUrl: string;
  likes: number;
}

export const memsData: Meme[] = [
  {
    id: 1,
    name: "Distracted Boyfriend",
    memeUrl: "https://imgflip.com/i/9quf5a",
    imageUrl: "https://i.imgflip.com/9quf5a.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "Two Buttons",
    memeUrl: "https://imgflip.com/i/9qg8cp",
    imageUrl: "https://i.imgflip.com/9qg8cp.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "Drake Hotline Bling",
    memeUrl: "https://imgflip.com/i/9qo7zd",
    imageUrl: "https://i.imgflip.com/9qo7zd.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "Left Exit 12 Off Ramp",
    memeUrl: "https://imgflip.com/i/9pfp1v",
    imageUrl: "https://i.imgflip.com/9pfp1v.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "There’s no point in tryna sleep lwk",
    memeUrl: "https://imgflip.com/i/9q665m",
    imageUrl: "https://i.imgflip.com/9q665m.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "Brain Meme",
    memeUrl: "https://imgflip.com/i/9i5wqc",
    imageUrl: "https://i.imgflip.com/9i5wqc.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "Disaster Girl",
    memeUrl: "https://imgflip.com/i/9odzuk",
    imageUrl: "https://i.imgflip.com/9odzuk.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "Woman Yelling At Cat",
    memeUrl: "https://imgflip.com/i/9qvp36",
    imageUrl: "https://i.imgflip.com/9qvp36.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "Blue button",
    memeUrl: "https://imgflip.com/i/9oinuw",
    imageUrl: "https://i.imgflip.com/9oinuw.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "Futurama Fry",
    memeUrl: "https://imgflip.com/i/9omks9",
    imageUrl: "https://i.imgflip.com/9omks9.jpg",
    likes: Math.floor(Math.random() * 100),
  },
];

export const setCookie = (name: string, value: any, days: number) => {
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name: string): any | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return JSON.parse(c.substring(nameEQ.length, c.length));
  }

  return null;
};
