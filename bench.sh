URL=localhost:3333/checkout/create
npx autocannon $URL -m POST \
    --header 'Content-Type: application/json'  \
    --body '{"userId":"123","productId":"555","price":19}' \
    --warmup [-c 1 -d 3] \
    --c 500 \
    --d 30 \
    --renderStatusCodes \
    --pipeline 10 \
    --latency \
    # --workers 5