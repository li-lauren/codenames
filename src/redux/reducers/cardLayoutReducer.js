const words = ['']
const INITIAL_STATE = {
  cardLayout: [
    {"id": 1, "word": "AMBULANCE", "color": "red"},
    {"id": 2, "word": "BERRY", "color": "blue"},
    {"id": 3, "word": "VET", "color": "red"},
    {"id": 4, "word": "TRIANGLE", "color": "red"},
    {"id": 5, "word": "DISEASE", "color": "blue"},
    {"id": 6, "word": "GLASS", "color": "blue"},
    {"id": 7, "word": "MILLIONAIRE", "color": "neutral"},
    {"id": 8, "word": "MODEL", "color": "red"},
    {"id": 9, "word": "SCHOOL", "color": "blue"}
  ]
};

const cardLayoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state
  }
};

export default cardLayoutReducer;
