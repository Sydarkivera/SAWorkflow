

export function formatBytes(o: any) {

  const sizes = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
  ]

  var size = o
  var index = 0
  while (size/1000 > 0.1) {
    size = size/1000
    index += 1
  }

  size = Math.floor(size * 1000) / 1000;

  return size + ' ' + sizes[index];
}


export const GraphColors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
'#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#16a085', '#27ae60',
'#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#c0392b', '#7f8c8d']
