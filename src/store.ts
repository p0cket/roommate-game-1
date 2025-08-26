// Zustand store setup for Roommate Game
import { create } from 'zustand'

type GameStore = {
  turn: number,
  inventory: string[],
  playerHP: number,
  enemyHP: number,
  setTurn: (turn: number) => void,
  setInventory: (items: string[]) => void,
  setPlayerHP: (hp: number) => void,
  setEnemyHP: (hp: number) => void,
}

export const useGameStore = create<GameStore>((set) => ({
  turn: 1,
  inventory: [],
  playerHP: 100,
  enemyHP: 100,
  setTurn: (turn) => set({ turn }),
  setInventory: (items) => set({ inventory: items }),
  setPlayerHP: (hp) => set({ playerHP: hp }),
  setEnemyHP: (hp) => set({ enemyHP: hp }),
}))
