import React from "react";
import { TouchableOpacity, View, FlatList, Text, Image } from "react-native";
import axios from "axios";

const API_URL =
  "http://192.168.0.16/rp/saudeapi/api/paciente/getdata?key=5e745c0cea8a9b82767237d27ba2554d";

export const DadosPessoais = axios.create({
  baseURL: API_URL
});
