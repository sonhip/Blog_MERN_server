import {PostModel} from '../models/posts.model.js'
export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({error: error})
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = PostModel(newPost);
    post.save();
    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true})
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({error: error})
  }
}
