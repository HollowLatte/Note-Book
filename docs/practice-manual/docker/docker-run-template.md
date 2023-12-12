---
title: Docker Run模板
author:
category: Docker
tag: Docker
date: 2023-12-12
---

## 常用

```bash
docker run -d \
    --name=start-service \
    --restart=always \
    -m 1g \
    -p 8080:8080 \
    -v /opt/hollowlatte/service/start-service:/home \
    -v /opt/hollowlatte/log:/opt/system/log \
    --net=host \
    hollowlatte-openjdk:21
```
