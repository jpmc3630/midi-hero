// current level track map
let midiFileName = 'lawandorder.mid';

let trackMap = {
  track1: {
    name: 'KICK',
    hex: [0x99,0x24,100],
    midiTr: 1
  },
  track2: {
    name: 'SNARE',
    hex: [0x99,0x25,100],
    midiTr: 3
  },
  track3: {
    name: 'TRIANGLE',
    hex: [0x99,0x50,75],
    midiTr: 2
  },
  track4: {
    name: 'TIMPANI',
    hex: [0x91,50,50],
    midiTr: 4
  }
}

let trackNotation = {
  "formatType": 1,
  "tracks": 5,
  "track": [
    {
      "event": [
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 81,
          "data": 500000
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 89,
          "data": 0
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 88,
          "data": [
            4,
            2,
            24,
            8
          ]
        },
        {
          "deltaTime": 4608,
          "type": 255,
          "metaType": 88,
          "data": [
            2,
            2,
            24,
            8
          ]
        },
        {
          "deltaTime": 9216,
          "type": 255,
          "metaType": 88,
          "data": [
            2,
            2,
            24,
            8
          ]
        },
        {
          "deltaTime": 384,
          "type": 255,
          "metaType": 88,
          "data": [
            4,
            2,
            24,
            8
          ]
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 47
        }
      ]
    },
    {
      "event": [
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            0,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            32,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 12,
          "channel": 9,
          "data": 0
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 3,
          "data": "BASS DRUM"
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            7,
            127
          ]
        },
        {
          "deltaTime": 672,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1433,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 2201,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1433,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 2297,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 761,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            73
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 665,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            73
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1529,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1433,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1433,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            91
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 1913,
          "type": 9,
          "channel": 9,
          "data": [
            36,
            82
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            36,
            0
          ]
        },
        {
          "deltaTime": 6904,
          "type": 11,
          "channel": 0,
          "data": [
            127,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 47
        }
      ]
    },
    {
      "event": [
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            0,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            32,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 12,
          "channel": 9,
          "data": 0
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 3,
          "data": "TRIANGLE"
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            7,
            127
          ]
        },
        {
          "deltaTime": 768,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            69
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            1
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            1
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            20
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            69
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            20
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            20
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            16
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            4
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            16
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            20
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            16
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            20
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 1625,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            16
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            60
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            24
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            92,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            92,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            69
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            42
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            69
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            33
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            51
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 89,
          "type": 9,
          "channel": 9,
          "data": [
            80,
            69
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            80,
            0
          ]
        },
        {
          "deltaTime": 6904,
          "type": 11,
          "channel": 0,
          "data": [
            127,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 47
        }
      ]
    },
    {
      "event": [
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            0,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            32,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 12,
          "channel": 9,
          "data": 0
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 3,
          "data": "RIM"
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 9,
          "data": [
            7,
            127
          ]
        },
        {
          "deltaTime": 952,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 193,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 181,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            118
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 369,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 385,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 358,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 196,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 189,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            118
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 374,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 380,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 378,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 384,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 362,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 385,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 364,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 385,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 385,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 369,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 389,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 385,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            118
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 381,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 373,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 185,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 177,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 185,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 185,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 1913,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 378,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 369,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 196,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 193,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            100
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 369,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 377,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 374,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 388,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 185,
          "type": 9,
          "channel": 9,
          "data": [
            37,
            109
          ]
        },
        {
          "deltaTime": 7,
          "type": 8,
          "channel": 9,
          "data": [
            37,
            0
          ]
        },
        {
          "deltaTime": 6904,
          "type": 11,
          "channel": 0,
          "data": [
            127,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 47
        }
      ]
    },
    {
      "event": [
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 1,
          "data": [
            0,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 1,
          "data": [
            32,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 12,
          "channel": 1,
          "data": 47
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 3,
          "data": "TAMPANI"
        },
        {
          "deltaTime": 0,
          "type": 11,
          "channel": 1,
          "data": [
            7,
            127
          ]
        },
        {
          "deltaTime": 676,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            100
          ]
        },
        {
          "deltaTime": 23,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 61,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            100
          ]
        },
        {
          "deltaTime": 181,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 1267,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            100
          ]
        },
        {
          "deltaTime": 31,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 65,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            91
          ]
        },
        {
          "deltaTime": 495,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 1709,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            109
          ]
        },
        {
          "deltaTime": 27,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 69,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            109
          ]
        },
        {
          "deltaTime": 411,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 1033,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            100
          ]
        },
        {
          "deltaTime": 27,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 69,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            91
          ]
        },
        {
          "deltaTime": 246,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 5022,
          "type": 9,
          "channel": 1,
          "data": [
            52,
            100
          ]
        },
        {
          "deltaTime": 23,
          "type": 8,
          "channel": 1,
          "data": [
            52,
            0
          ]
        },
        {
          "deltaTime": 77,
          "type": 9,
          "channel": 1,
          "data": [
            57,
            100
          ]
        },
        {
          "deltaTime": 534,
          "type": 8,
          "channel": 1,
          "data": [
            57,
            0
          ]
        },
        {
          "deltaTime": 914,
          "type": 9,
          "channel": 1,
          "data": [
            52,
            100
          ]
        },
        {
          "deltaTime": 27,
          "type": 8,
          "channel": 1,
          "data": [
            52,
            0
          ]
        },
        {
          "deltaTime": 65,
          "type": 9,
          "channel": 1,
          "data": [
            57,
            91
          ]
        },
        {
          "deltaTime": 572,
          "type": 8,
          "channel": 1,
          "data": [
            57,
            0
          ]
        },
        {
          "deltaTime": 860,
          "type": 9,
          "channel": 1,
          "data": [
            48,
            100
          ]
        },
        {
          "deltaTime": 23,
          "type": 8,
          "channel": 1,
          "data": [
            48,
            0
          ]
        },
        {
          "deltaTime": 62,
          "type": 9,
          "channel": 1,
          "data": [
            53,
            100
          ]
        },
        {
          "deltaTime": 595,
          "type": 8,
          "channel": 1,
          "data": [
            53,
            0
          ]
        },
        {
          "deltaTime": 3249,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            100
          ]
        },
        {
          "deltaTime": 572,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 887,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            109
          ]
        },
        {
          "deltaTime": 0,
          "type": 9,
          "channel": 1,
          "data": [
            52,
            64
          ]
        },
        {
          "deltaTime": 15,
          "type": 8,
          "channel": 1,
          "data": [
            52,
            0
          ]
        },
        {
          "deltaTime": 4,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 77,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            100
          ]
        },
        {
          "deltaTime": 434,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 1002,
          "type": 9,
          "channel": 1,
          "data": [
            50,
            109
          ]
        },
        {
          "deltaTime": 20,
          "type": 8,
          "channel": 1,
          "data": [
            50,
            0
          ]
        },
        {
          "deltaTime": 80,
          "type": 9,
          "channel": 1,
          "data": [
            55,
            100
          ]
        },
        {
          "deltaTime": 415,
          "type": 8,
          "channel": 1,
          "data": [
            55,
            0
          ]
        },
        {
          "deltaTime": 8416,
          "type": 11,
          "channel": 0,
          "data": [
            127,
            0
          ]
        },
        {
          "deltaTime": 0,
          "type": 255,
          "metaType": 47
        }
      ]
    }
  ],
  "timeDivision": 192
}

