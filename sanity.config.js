import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import user from './schemas/user'
import pin from './schemas/pin'
import comment from './schemas/comment'
import postedBy from './schemas/postedBy'
import save from './schemas/save'
import sanity from '../sanity.json'

export default defineConfig({
  name: 'default',
  title: 'logigram',

  projectId: 'dhf657jz',
  dataset: 'production',

  

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
    user, pin, comment, postedBy, save
  },
})
