const getSize = (w, h, d) => {
    const area = (w * h * 2) + (w * d * 2) + (h * d * 2)
    const volume = w * h * d
    return [area, volume]
  }