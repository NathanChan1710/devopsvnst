# DEVOPS-11 — story DEVOPS-3: endpoint `/boom`

## Critères d’acceptation

- `GET /boom` renvoie le statut HTTP `500`.
- Le gestionnaire d’erreurs commun renvoie un objet JSON `{ "error": true, "message": "..." }`.

## Implémentation

La route est définie dans `src/routes/auto/boom.route.js`. Elle transmet une erreur au gestionnaire global de `src/utils/errorHandler.js`, qui normalise le statut et la réponse JSON.

Exemple de réponse observée :

```json
{"error":true,"message":"Boom!"}
```

## Vérification

- Test d’intégration : `test/boom.test.js`.
- Test unitaire du gestionnaire : `test/unit/errorHandler.test.js`.
- Commandes : `npm run lint`, `npm test`, `npm test -- --coverage`.
- Dernière vérification locale : 17 tests réussis après synchronisation sur main ; couverture lignes 92,68 %, branches 72,22 %, fonctions 90,9 %, instructions 93,75 %.
- Le pipeline GitHub Actions exécute le lint, les tests et le rapport de couverture.

La clé `DEVOPS-11` est l’identifiant Jira de cette story ; `DEVOPS-3` est son titre dans Jira.
