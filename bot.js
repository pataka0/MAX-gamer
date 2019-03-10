import discord
from discord.ext import commands
import asynico

bot = commands.Bot(command_prefix = 'b')

@bot.event
async def on_ready():
print('The bot is ready!')
print(bot.user.name)
print(bot.user.id)

bot.run('NTU0MjAyMDgwODQ4NTEwOTk4.D2ZxjQ.tUFlaHLwqAGL1bmmPdZb0m0SNmA')
