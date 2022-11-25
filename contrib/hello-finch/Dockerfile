FROM public.ecr.aws/docker/library/golang:1.19 AS builder
WORKDIR /build
COPY . .

RUN CGO_ENABLED=0 go build -a -o hello-finch .

FROM scratch
COPY --from=builder /build/hello-finch /app/
WORKDIR /app
ENTRYPOINT ["./hello-finch"]
