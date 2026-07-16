import { NotionAPI } from 'notion-client'

const { NOTION_ACCESS_TOKEN } = process.env

const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })

// Function to normalize double-wrapped Notion API responses
function normalizeRecordMap(recordMap) {
  if (!recordMap) return
  const tables = ['block', 'collection', 'collection_view', 'notion_user']
  for (const table of tables) {
    if (recordMap[table]) {
      for (const id of Object.keys(recordMap[table])) {
        const entry = recordMap[table][id]
        if (entry && entry.value && entry.value.value) {
          recordMap[table][id] = entry.value
        }
      }
    }
  }
}

// Wrap fetch to automatically intercept and normalize recordMap and recordMapWithRoles
const originalFetch = client.fetch.bind(client)
client.fetch = async function (...args) {
  const res = await originalFetch(...args)
  if (res) {
    if (res.recordMap) {
      normalizeRecordMap(res.recordMap)
    }
    if (res.recordMapWithRoles) {
      normalizeRecordMap(res.recordMapWithRoles)
    }
  }
  return res
}

export default client

