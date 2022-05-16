require("dotenv").config()

import * as fs from 'fs';
import * as crypto from 'crypto';

import axios from 'axios';
import { setlog } from '../Util';

const colors = require('colors')
const chainApiUrl = process.env.CHAINAPI_URL || ''
export const hmac256 = (message:string, secret:string) => crypto.createHmac('SHA256', secret).update(message).digest('hex');
export const generatePassword = () => (Math.random()*1e10).toString(36).slice(-12)
export const N = (v:number,p:number=6) => Math.round(v * 10 ** p) / 10 ** p
export const now = () => Math.round(new Date().getTime()/1000)
/* export const enc=(p:string|number):string|null=>{
	try {
		if(typeof p!='string') p=p.toString();
		if (process.env.CRYPTOKEY!==undefined) {
			let secret:string=process.env.CRYPTOKEY;
			let iv = secret.substr(0,16);
			let encryptor = crypto.createCipheriv('AES-256-CBC', secret, iv);
			let s=encryptor.update(p, 'utf8', 'hex') + encryptor.final('hex');
			return encodeURIComponent(s)
		}
	} catch (err) {}
	return null;
};

export const dec=(c:string):string|null=>{
	try {
		if (process.env.CRYPTOKEY!==undefined) {
			let secret=process.env.CRYPTOKEY;
			let iv = secret.substr(0,16);
			let decryptor = crypto.createDecipheriv('AES-256-CBC', secret, iv);
			let s=decryptor.update(c, 'hex', 'utf8') + decryptor.final('utf8');
			return decodeURIComponent(s)
		}
	} catch (err) {}
	return null;
}; */
export const callChainApi = async (url:string, json?:any, headers?:{[key:string]:string}):Promise<any>=>{
	try {
		const response = await (json ? axios.post(chainApiUrl + url, json, {timeout: 60000, headers: {'Content-Type': 'application/json', ...headers}}) : axios.get(url))
		if (response!==null && response.data) {
			if (response.data.result!==undefined) return true
			if (response.data) return response.data;
		}
	} catch (error) {
		setlog(url, error)
	}
	return false
}


export const validateEmail = (email:string):boolean =>email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!==null;
export const validateUsername = (username:string):boolean => /^[a-zA-Z0-9]{3,20}$/.test(username);

export const generateCode = () => {
	let code = String(Math.round(Math.random() * 899976 + 10012))
	if (code.length < 6) code = '0'.repeat(6 - code.length) + code
	return code
}
export const generateID = () => Math.round(new Date().getTime() / 1000 + Math.random() * 5001221051)