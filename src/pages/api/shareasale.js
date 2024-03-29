// pages/api/shareasale.js

import { createHash } from 'crypto';
import axios from 'axios';

export default async function handler(req, res) {
  // credentials and request params
  const my_affiliate_id = 2332001;
  const api_token = '6ZZdMuUOD4xT43v0';
  const api_secret_key = 'YTo0cd9g1YBljj5aHIu2py6r2SCqtk8e';
  const api_version = 2.5;
  const action_verb = 'merchantSearch';
  const my_timestamp = new Date().toUTCString();

  // authentication
  const sig = `${api_token}:${my_timestamp}:${action_verb}:${api_secret_key}`;
  const sig_hash = createHash('sha256').update(sig).digest('hex');
  let keyword = "baseball"
  const my_headers = { 'x-ShareASale-Date': my_timestamp, 'x-ShareASale-Authentication': sig_hash };

  // setup request params
  const url = 'shareasale.com';
  const path = `/x.cfm?affiliateId=${my_affiliate_id}&token=${api_token}&version=${api_version}&action=${action_verb}&keyword=${keyword}`;

  try {
    const response = await axios.get(`https://${url}${path}`, { headers: my_headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
