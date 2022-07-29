import { format } from 'date-fns'

import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Caption, List, Text, Divider } from 'react-native-paper'

export default function MessageScreen() {
  const items = [
    {
      sender: 'Crystal Tucker',
      from: 'James Caldwell',
      createdAt: '2013-12-06 15:50:17',
      content: 'Boy about same. Various action result end bag.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1999-10-26 16:20:49',
      content: 'Every speech entire goal town.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1993-01-11 12:05:40',
      content: 'Consumer how include. Money identify son human turn.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1975-02-05 21:20:15',
      content:
        'Thought because learn so whether everything. Performance situation growth.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '2011-08-10 16:19:00',
      content: 'Upon election read make house painting.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '2005-11-14 22:25:18',
      content:
        'Daughter walk each consider model. Consider cultural we miss nice will share.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1990-08-13 12:19:08',
      content:
        'Group no special collection resource. Summer his forget long myself lawyer.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1993-05-05 15:08:54',
      content: 'Its hit yard before within law central third.',
    },
    {
      sender: 'Crystal Tucker',
      from: 'James Caldwell',
      createdAt: '1999-10-28 22:27:06',
      content: 'Produce give tax you game. Blood price large different box.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1998-03-17 16:31:15',
      content:
        'Better natural friend few trial as want. Young level relate else night.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1986-08-18 08:56:37',
      content:
        'Interesting indicate claim owner figure. Arrive book open throw house.',
    },
    {
      sender: 'Crystal Tucker',
      from: 'James Caldwell',
      createdAt: '2007-03-11 17:09:25',
      content:
        'Fire central chair whole real. Religious life way day man third.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1982-07-25 07:15:48',
      content: 'Test front idea card follow. Tv say drug when.',
    },
    {
      sender: 'James Caldwell',
      from: 'Crystal Tucker',
      createdAt: '1975-10-03 20:12:10',
      content:
        'Present general together line prepare ability ok pretty. Rest wide require.',
    },
  ]
}
