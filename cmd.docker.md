# Help

```docker --help```

# Docker 

## build Dockerfile

```docker build .```

## Run

```docker run```

## Creer image
```docker build -t story-image .```

## Lance l'image dans un container
```docker run --rm -p 3000:3000 story-image```

```docker-compose up -d --build```

# Images

## Liste

```docker image ls```

## Supprimer

```docker image rm imageId```

## Spprimer toutes les image

```docker image prune```

# Docker-Compose

## Eteindre

```docker-compose down```

## Demarrer

```docker-compose up -d```

## Afficher les logs

```docker-compose logs -f ServiceName```