// forget about type
// i'm lazy to make a type for this because this is for roblox u know?
// btw why u read this?

export async function getAvatarBust(userId: number): Promise<any> {
  const url = `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userId}&size=420x420&format=Png&isCircular=false`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
