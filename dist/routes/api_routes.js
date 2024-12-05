import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, addNewThought, getThoughtById, getAllThoughts, updateThoughtById, deleteThoughtById, addNewReaction, deleteReactionById, addFriendToFriendsList, deleteFriendById } from '../controllers/api_controller.js';
const router = Router();
// POST route to create a user
router.post('/users', createUser);
// GET route to get all users
router.get('/users', getAllUsers);
// GET route to get user info by ID
router.get('/user/:user_id', getUserById);
// PUT route to update a user by ID
router.put('/user/:user_id', updateUserById);
// DELETE route to remove a user by ID
router.delete('/user/:user_id', deleteUserById);
// POST route to add a new thought and push id to the associated user
router.post('/thought', addNewThought);
// GET route to get a single thought by it's ID
router.get('/thoughts/:thought_id', getThoughtById);
// GET route to get all thoughts
router.get('/thoughts', getAllThoughts);
// PUT route to update thought by ID
router.put('/thoughts/:thought_id', updateThoughtById);
// DELETE route to delete thought by ID
router.delete('/thoughts/:thought_id', deleteThoughtById);
// POST route to add a new reaction
router.post('/thoughts/:thought_id/reactions', addNewReaction);
// DELETE route to delete reaction by thoughtID and reactionID
router.delete('/thoughts/:thoughtId/reactions/:reaction_id', deleteReactionById);
// POST route to add a friend to user's friend list
router.post('/users/:userId/friends/:friendId', addFriendToFriendsList);
// DELETE route to delete a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', deleteFriendById);
export default router;
