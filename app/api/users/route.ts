import startDb from '@/_utils/startDb';

const GET = async () => {
    await startDb();
    const users = await User.find()
    return users
}