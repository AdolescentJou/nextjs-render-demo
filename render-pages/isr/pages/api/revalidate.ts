export default async function handler(req: any, res: any) {
  console.log(req.query); // Check for secret to confirm this is a valid request
  //这里的process.env.NEXT_PUBLIC_UPDATE_SSG名字要与你设置在项目中的环境变量名字相同
  if (req.query.secret !== process.env.NEXT_PUBLIC_UPDATE_SSG) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(req.query.path);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
