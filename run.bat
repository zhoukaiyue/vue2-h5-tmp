@echo off
setlocal EnableDelayedExpansion
set counter=1


echo "��ѡ��Ҫִ�еĽű����"


for /f "tokens=*" %%a in ('node -p "Object.keys(require('./package.json').scripts).join('\n')"') do (
  set "option[!counter!]=%%a"
  echo !counter!. %%a
  set /a counter+=1
)


set /p choice="������ѡ�����ţ�"

 
echo Running script: !option[%choice%]!


npm run !option[%choice%]! 2>error.log || (
  echo "�������� ��� error.log �˽���ϸ��Ϣ��"
  pause
)