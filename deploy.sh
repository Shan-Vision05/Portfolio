#!/bin/bash

# Portfolio Deployment Script for Hetzner
# This script automates the deployment process

set -e

# Detect docker-compose command (v1 vs v2)
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
elif docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    echo "❌ Error: docker-compose or docker compose plugin not found"
    echo "Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "🚀 Starting deployment..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t portfolio:latest .

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container (if any)..."
$DOCKER_COMPOSE down 2>/dev/null || true

# Start the container
echo "✅ Starting container..."
$DOCKER_COMPOSE up -d

# Show container status
echo "📊 Container status:"
docker ps | grep portfolio || echo "Container started but not showing in grep"

echo "✨ Deployment complete!"
echo "🌐 Your portfolio is now running on http://localhost:8080"
