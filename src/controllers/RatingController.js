const ratingService = require('../services/RatingService');

class RatingController {
  async addOrUpdateRating(req, res) {
    const { userId, restaurantId, rating } = req.body;

    try {
      const result = await ratingService.addOrUpdateRating(userId, restaurantId, rating);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAverageRating(req, res) {
    const { restaurantId } = req.params;

    try {
      const result = await ratingService.getAverageRating(restaurantId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getRestaurantRatingWithUserRating(req, res) {
    const { restaurantId } = req.body;
    const { userId } = req.body;

    try {
      const result = await ratingService.getRestaurantRatingWithUserRating(restaurantId, userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new RatingController();
