// controllers/reclamationController.js

const ReclamationService = require('../services/reclamationService');

const ReclamationController = {
  // Créer une nouvelle réclamation
  async createReclamation(req, res) {
    try {
      const { subject, description, clientId } = req.body;
      const reclamation = await ReclamationService.createReclamation(clientId, subject, description);
      res.status(201).json(reclamation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir toutes les réclamations pour un client
  async getReclamationsByClientId(req, res) {
    try {
      const { id } = req.params;
      const reclamations = await ReclamationService.getReclamationsByClientId(id);
      res.json(reclamations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateReclamationStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedReclamation = await ReclamationService.updateReclamationStatus(id, status);
      res.json(updatedReclamation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Supprimer une réclamation
  async deleteReclamation(req, res) {
    try {
      const { id } = req.params;
      const deletedReclamation = await ReclamationService.deleteReclamation(id);
      res.json(deletedReclamation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ReclamationController;
