# Auth Testing Playbook (Green Continent Tours admin)

Single admin, JWT Bearer tokens (12h), no registration, no cookies.

1. MongoDB: `db.users.findOne({role:"admin"})` -> password_hash starts with `$2b$`; unique index on users.email; index on login_attempts.identifier.
2. API:
```
curl -X POST $API/api/auth/login -H "Content-Type: application/json" -d '{"email":"info@greencontinenttours.com","password":"GCT-iMyf-aKP51zV51Kb"}'
curl $API/api/auth/me -H "Authorization: Bearer <token>"
```
3. Brute force: 5 wrong passwords from same IP+email -> 429 for 15 minutes (clear with `db.login_attempts.deleteMany({})`).
4. All /api/admin/* routes return 401 without a valid token.
