URL=localhost:3333/checkout/create
npx autocannon $URL -m POST \
    --headers 'Content-Type: application/json'  \
    --body '{"userId":"123","productId":"555","price":19}' \
    --warmup [ -c 1 -d 2 ] \
    --pipeline 10 \
    --connections 500 \
    --duration 15 \
    --renderStatusCodes \
    --latency  \
    --workers 5