import { compress, decompress } from '../src/core'
import { sample } from './sample'

export function test() {
  function test(x: any) {
    const s = compress(x)
    const y = decompress(s)
    console.dir({ x, s }, { depth: 20 })
    if (JSON.stringify(x) !== JSON.stringify(y)) {
      console.error({ x, s, y })
      throw new Error('compress/decompress mismatch')
    }
  }

  const data = sample()
  test(data.rich)
  test(data.conflict)
  test(data.sparse)

  console.log('pass:', __filename.replace(__dirname + '/', ''))
}

test()