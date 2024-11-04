class TicTacToe:

    def __init__(self, n: int):
        # self.board = []
        self.board = [[0] * n for _ in range(n)]
        self.n = n
        

    def move(self, row: int, col: int, player: int) -> int:
        self.board[row][col] = player
        if self.checkRow(row, player) or self.checkCol(col, player) or row == col and self.checkDiagonal(player) or col == self.n - row - 1 and self.antiCheckDiagonal(player):
            return player
        # // No one wins
        return 0
        

    def checkRow(self, row, player):
        for col in range(self.n):
            if self.board[row][col] != player:
                return False
        return True
    
    def checkCol(self, col, player):
        for row in range(self.n):
            if self.board[row][col] != player:
                return False
        return True
    
    def checkDiagonal(self, player):
        for row in range(self.n):
            if self.board[row][row] != player:
                return False
        return True
    def antiCheckDiagonal(self, player):
        for row in range(self.n):
            if self.board[row][self.n - row - 1] != player:
                return False
        return True

# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe(n)
# param_1 = obj.move(row,col,player)